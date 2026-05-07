export const cambiarTituloPagina = (idPagina) => {
    const titulos = {
    "Pagina Principal": "Página Principal | Canseco & Asociados",
    "Sobre Nosotros": "Sobre Nosotros | Canseco & Asociados",
    "Consulta Legal": "Consulta Legal | Canseco & Asociados",
    "Derecho Civil": "Derecho Civil | Canseco & Asociados",
    "Derecho Laboral": "Derecho Laboral | Canseco & Asociados",
    "Derecho del Consumidor": "Derecho del Consumidor | Canseco & Asociados",
    "Procesos Administrativos": "Procesos Administrativos | Canseco & Asociados",
    "Derecho Penal": "Derecho Penal | Canseco & Asociados",
    "Derecho Previsional": "Derecho Previsional | Canseco & Asociados",
    "Propiedad Intelectual": "Propiedad Intelectual | Canseco & Asociados",
    "Mediaciones y Amparos": "Mediaciones y Amparos | Canseco & Asociados",
    "Error 404": "Página no encontrada | Canseco & Asociados"
    }

    document.title = titulos[idPagina] || "Canseco & asociados"
}