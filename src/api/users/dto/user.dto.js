//=================
// Class RoleDTO
//=================
export class UserDTO {
  constructor(user) {
    this.id = user.id;
    this.avatar = user.avatar;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.isActive = user.isActive;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }

  //===========
  // Setters
  //===========
  setId(id) {
    this.id = id;
  }

  setAvatar(value) {
    this.avatar = value;
  }


  setName(value) {
    this.name = value;
  }

  setLastName(value) {
    this.lastName = value;
  }

  setEmail(value) {
    this.email = value;
  }

  setPassword(value) {
    this.password = value;
  }

  setIsActive(value) {
    this.isActive = value;
  }

  setCreatedAt(value) {
    this.createdAt = value;
  }

  setUpdatedAt(value) {
    this.updatedAt = value;
  }

  //===========
  // Getters
  //===========
  getId() {
    return this.id;
  }

  getAvatar() {
    return this.avatar;
  }

  getName() {
    return this.name;
  }

  getLastName() {
    return this.lastName;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  
  getIsActive() {
    return this.isActive;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  //============
  // Function
  //============
  toDTO(fieldsToShow) {
    const dto = {};
    fieldsToShow.forEach((field) => {
      if (this.hasOwnProperty(field)) {
        dto[field] = this[field];
      }
    });
    return dto;
  }
}
