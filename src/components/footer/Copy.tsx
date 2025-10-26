export const Copy = () => {
    return (
        <div className="text-center mt-4 text-sm text-gray-500">
            <p>
                &copy; {new Date().getFullYear()} La Chispa. Todos los derechos reservados.
            </p>
            <p className="mt-1">
                Diseño, Desarrollo & Deploy por{" "}
                <a
                    href="https://jasd-dev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    andresweblab
                </a>
                .
            </p>
        </div>
    );
};
