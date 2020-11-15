const UPDATE_FORM = "UPDATE_FORM";
const LOGOUT = "LOGOUT";

export function login(name,email)
{
    return {
        type: UPDATE_FORM,
        name : name,
        email:email
      };
}

export function logout()
{
    return {
        type: LOGOUT,
      };
}