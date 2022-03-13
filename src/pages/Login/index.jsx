import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MainContainer } from "./style";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email("Email inválido!")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos!")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
    history.push("/dashboard");
  };

  return (
    <MainContainer>
      <h1>Kenzie Shop</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>

          <label>
            Email
            <input
              placeholder="Digite seu email aqui"
              {...register("email")}
            />
          </label>
          <p>{errors.email?.message}</p>

          <label>
            Senha
            <input
              type="password"
              placeholder="Digite sua senha aqui"
              {...register("password")}
            />
          </label>
          <p>{errors.password?.message}</p>

          <button type="submit">Entrar</button>
        </form>
    </MainContainer>
  );
};

export default Login;
