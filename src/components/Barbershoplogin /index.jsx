import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import {
  BrandName,
  Button,
  Card,
  CornerAccent,
  Divider,
  ErrorMsg,
  FieldGroup,
  FooterText,
  ForgotLink,
  Input,
  InputWrapper,
  Label,
  LogoArea,
  ScanLine,
  ScissorIcon,
  Tagline,
  Wrapper,
} from "./styles";

function BarbershopLogin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPass, setFocusedPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Preencha todos os campos para continuar.");
      toast.warning("Preencha e-mail e senha.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await signIn({
        email: email.trim(),
        password,
      });

      toast.success("Login realizado com sucesso.");
      navigate("/admin");
    } catch (error) {
      const message =
        error.response?.data?.error || "Não foi possível fazer login. Verifique seus dados.";

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <ScanLine />

      <Card>
        <CornerAccent className="tl" />
        <CornerAccent className="tr" />
        <CornerAccent className="bl" />
        <CornerAccent className="br" />

        <LogoArea>
          <ScissorIcon>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
          </ScissorIcon>

          <BrandName>The Blade & Comb</BrandName>
          <Tagline>Estilo & Precisão</Tagline>
        </LogoArea>

        <Divider>
          <span />
          <em>Acesso</em>
          <span />
        </Divider>

        <form onSubmit={handleSubmit} noValidate>
          <FieldGroup>
            <Label htmlFor="email">E-mail</Label>
            <InputWrapper $focused={focusedEmail}>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>

              <Input
                id="email"
                type="email"
                placeholder="admin@email.com"
                value={email}
                $focused={focusedEmail}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedEmail(true)}
                onBlur={() => setFocusedEmail(false)}
                autoComplete="email"
              />
            </InputWrapper>
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="password">Senha</Label>
            <InputWrapper $focused={focusedPass}>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1.5" fill="#e0b767" stroke="none" />
              </svg>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                $focused={focusedPass}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedPass(true)}
                onBlur={() => setFocusedPass(false)}
                autoComplete="current-password"
              />
            </InputWrapper>
          </FieldGroup>

          <ForgotLink href="/">Voltar para Home</ForgotLink>

          <Button type="submit" $loading={loading} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>

          <ErrorMsg $show={Boolean(error)}>{error}</ErrorMsg>
        </form>

        <FooterText>
          Acesso restrito ao <a href="/">administrador</a>
        </FooterText>
      </Card>
    </Wrapper>
  );
}

export default BarbershopLogin;
