const servicioEjemplo = async (param: any) => {
    try {
        const data = {data: 'Ruta de ejemplo'};
        return data;
    } catch (e) {
        throw Error('Error en servicio');
    }
};

export default {servicioEjemplo};
