import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import {CreateUserContainer} from '../styles/createUser.style';

const CreateUser = () => {
  return (
    <CreateUserContainer>
      <Input
        margin="0px 0px 16px 0px"
        placeholder="Digite seu nome"
        title="Nome completo:"
      />
      <Input
        margin="0px 0px 16px 0px"
        placeholder="Digite seu telefone"
        title="Telefone:"
      />
      <Input
        margin="0px 0px 16px 0px"
        placeholder="Digite seu email"
        title="Email:"
      />
      <Input
        margin="0px 0px 16px 0px"
        placeholder="Digite seu CPF"
        title="CPF:"
      />
      <Input
        margin="0px 0px 16px 0px"
        placeholder="Digite sua senha"
        title="Senha:"
      />
      <Input
        margin="0px 0px 16px 0px"
        placeholder="Confirme a senha"
        title="Confirmar senha:"
      />
      <Button margin="16px 0px 16px 0px" title="Criar Usuário" />
    </CreateUserContainer>
  );
};

export default CreateUser;
