import { useMainStore } from "../../store/main/reducer";
import { GoogleLogin } from "react-google-login";
import {env} from 'config'
import { styled } from "@mui/system";
import { StyledScreen } from "styles";

const StyledContainer = styled(StyledScreen)({

})

function Login() {
  const value = useMainStore();
  console.log(value);


  return (
    <StyledContainer>
      <GoogleLogin
        clientId={env.googleClientId!!}
        buttonText="Login"
        onSuccess={() => console.log('success')}
        onFailure={() => console.log('failure')}
        cookiePolicy={"single_host_origin"}
      />
    </StyledContainer>
  );
}

export default Login;
