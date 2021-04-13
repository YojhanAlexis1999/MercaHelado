
import {
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../type';

export default (state, action) => {

    switch (action.type) {

        default:
            return state

        case LOGIN_EXITOSO:
            return {
                ...state,
                usuario: action.payload,
                rol: action.payload.id_rol,
                autenticado: true
            }
        case CERRAR_SESION:
            return {
                ...state,
                usuario: null,
                rol: null,
                autenticado: false
            }

    }

}