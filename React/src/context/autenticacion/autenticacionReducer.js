
import { 
    LOGIN_EXITOSO,
} from '../../type';

export default (state, action) => {

    switch (action.type) {

        default:
            return state

        case LOGIN_EXITOSO:
            return {
                ...state,
                usuario:action.payload,
                rol:action.payload.id_rol,
                autenticado: true
            }

    }

}