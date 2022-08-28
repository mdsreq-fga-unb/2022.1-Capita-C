import prisma from "../src/databaseClient"
import authService from "../src/services/authService"

describe("Login Tests", () => {
    it("login_cpfEpass_token", async () => {

        // Arrange
        await prisma.user.create(
            {
                data: {
                    name: "Kleber",
                    cpf: "12345678910",
                    isAdmin: true,
                    isConsultor: false,
                    isTelemarketing: false,
                    password: "password"
                }
            }
        )

        const cpf = "12345678910"
        const pass = "password"

        // Act
        const jwt = await authService.login(cpf, pass);

        // Assert
        expect(jwt).toBeDefined();
    })

    it("login_cpfEpass_error", async () => {

        // Arrange
        const cpf = "INEXISTENTE"
        const pass = "INEXISTENTE";

        // Act & Assert
        await expect(() => authService.login(cpf, pass)).rejects.toThrowError("Usuário não encontrado");

    })
}) 
