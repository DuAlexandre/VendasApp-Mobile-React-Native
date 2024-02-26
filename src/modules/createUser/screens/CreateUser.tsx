import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  const {
    createUser,
    handleOnChangeInput,
    handleCreateUser,
    loading,
    disable,
  } = useCreateUser();

  return (
    <CreateUserContainer>
      <Input
        value={createUser.name}
        onChange={event => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu nome"
        title="Nome completo:"
      />
      <Input
        value={createUser.phone}
        onChange={event => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu telefone"
        title="Telefone:"
      />
      <Input
        value={createUser.email}
        onChange={event => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu email"
        title="Email:"
      />
      <Input
        value={createUser.cpf}
        onChange={event => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu CPF"
        title="CPF:"
      />
      <Input
        secureTextEntry
        value={createUser.password}
        onChange={event => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite sua senha"
        title="Senha:"
      />
      <Input
        secureTextEntry
        value={createUser.confirmPassword}
        onChange={event => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="Confirme a senha"
        title="Confirmar senha:"
      />
      <Button
        margin="16px 0px 16px 0px"
        title="Criar Usuário"
        onPress={handleCreateUser}
        loading={loading}
        disabled={disable}
      />
    </CreateUserContainer>
  );
};

export default CreateUser;
