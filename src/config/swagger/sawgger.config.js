import "dotenv/config";
import swaggerJsDoc from "swagger-jsdoc";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import swaggerUI from "swagger-ui-express";
const { HOST_DEV, PORT, HOST_PROD_BACK } = process.env;

const env =
  process.env.VERCEL_ENV?.trim() !== "production" ? "development" : "production";
const port = PORT ?? 3001;
const hostDev = HOST_DEV ?? "localhost";
const hostProd = HOST_PROD_BACK ?? "api-mustachy.vercel.app";
const theme = new SwaggerTheme();
const darkStyle = theme.getBuffer(SwaggerThemeNameEnum.DARK);
const serverUrl =
  env === "production"
    ? `https://${hostProd}/{basePath}/{versionApi}`
    : `http://${hostDev}:${port}/{basePath}/{versionApi}`;
const apisRoot = `./**/doc/*.doc.js`;
const swaggerConfig = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api.",
      summary: "Api Management System.",
      description: "Api Management System By.",
      termsOfService: "http://swagger.io/terms/",
      contact: {
        name: "Mustachy",
        url: 'https://the-amazing-gentleman-programming-book.vercel.app/',
        email: 'mustachy@gmail.com',
      },
      license: {
        name: "MIT",
        identifier: "MIT",
        url: "https://opensource.org/license/mit/",
      },
      version: "1.0.0",
    },
    externalDocs: {
      description: "Find out more about Swagger",
      url: "http://swagger.io",
    },
    servers: [
      {
        url: serverUrl,
        description:
          "The server api environment " +
          (env?.trim() === "production" ? "production" : "development"),
        variables: {
          basePath: {
            enum: ["api"],
            default: "api",
            description: "this value is assigned by the service provider",
          },
          versionApi: {
            enum: ["v1", "v2"],
            default: "v1",
            description: "this value is assigned by the service provider",
          },
        },
      },
    ],
    consumes: ["application/json", "multipart/form-data"],
    produces: ["application/json", "multipart/form-data"],
  },
  apis: [apisRoot],
};

const swaggerOptions = {
  explorer: true,
  swaggerUi: true,
  docExpansion: "list",
  filter: true,
  customSiteTitle: "Api Mustachy",
  customHeadTags: [
    {
      tagName: "meta",
      closeTag: true,
      attributes: {
        name: "twitter:card",
        content: "summary",
      },
    },
    {
      tagName: "meta",
      closeTag: true,
      attributes: {
        name: "twitter:title",
        content: "Project Api",
      },
    },
    {
      tagName: "meta",
      closeTag: true,
      attributes: {
        name: "twitter:description",
        content: "Un Sistema de api server",
      },
    },
    {
      tagName: "meta",
      closeTag: true,
      attributes: {
        name: "twitter:image",
        content: "https://projecto.vercel.app/assets/img/ograhp.bmp",
      },
    },
    {
      tagName: "meta",
      closeTag: true,
      attributes: {
        property: "og:title",
        content: "Project Api",
      },
    },
    {
      tagName: "meta",
      closeTag: true,
      attributes: {
        property: "og:description",
        content: "Un Sistema de api server",
      },
    },
    {
      tagName: "meta",
      closeTag: true,
      attributes: {
        property: "og:image",
        content: "https://projecto.vercel.app/assets/img/ograhp.bmp",
      },
    },
  ],
  customCss: `${darkStyle}
    .main{
      background-image: url("/assets/img/logo.jpg");
      background-size: 60px 60px;
      background-repeat: no-repeat;
      padding-left: 70px;
      height: 60px;
      align-content: center;
    }
    .topbar{ display: none;}
    `,
  customfavIcon: "/assets/ico/favicon.ico",
  customJs: `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.4/swagger-ui-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.4/swagger-ui-standalone-preset.min.js"></script>
  `,
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.4/swagger-ui.min.css",
};

const swaggerSettings = swaggerJsDoc(swaggerConfig);
export const middleware = swaggerUI.serve;
export const controller = swaggerUI.setup(swaggerSettings, swaggerOptions);
