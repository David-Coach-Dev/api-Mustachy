//==================
// Imports
//==================
import multer from "multer";
import { extname, join } from "path";
import { getFolderName } from "#lib/validations";
import { mkdirSync } from "fs";

//=====================
// Class Upload Error
//=====================
class UploadError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
}

//==================
// Store Multer
//==================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = join("/tmp", "/uploads");
    mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}${extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

//==================
// Upload
//==================
const upload = multer({ storage: storage });

//======================
// Upload Middleware
//======================
export const setUpload = (req, res, next) => {
  try {
    const folder = getFolderName(req.baseUrl);
    console.log("Nombre de la carpeta:", folder);
    console.log("Ruta de subida:", join('/tmp', "/uploads"));
    upload.single(folder)(req, res, (err) => {
      if (err) {
        console.error("Error al subir el archivo:", err);
        return next(new UploadError("upload_error", "Error al subir el archivo"));
      }
      console.log("Imagen recibida...");
      next();
    });
  } catch (error) {
    console.error("Error en el middleware de subida:", error);
    next(new UploadError("upload_error", "Error en el middleware de subida"));
  }
};
