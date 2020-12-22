const servicioEjemplo = async (param: any) => {
  try {
    const data = { data: 'Ruta de ejemplo' }
    return data
  } catch (e) {
    throw Error('Error en servicio')
  }
}

const userService = async (param: any) => {
  try {
    const data = { data: 'User Service' }
    return data
  } catch (e) {
    throw Error('Error en servicio USER')
  }
}

const adminService = async (param: any) => {
  try {
    const data = { data: 'Admin Service' }
    return data
  } catch (e) {
    throw Error('Error en servicio ADMIN')
  }
}

const fullUserService = async (param: any) => {
  try {
    const data = { data: 'Full User Service' }
    return data
  } catch (e) {
    throw Error('Error en servicio FULL USER')
  }
}

export default { servicioEjemplo, userService, adminService, fullUserService }
