import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./Formulario.css";

const especialidadesPorArea = {
  "Derecho Civil": ["Familia", "Contratos", "Daños y Perjuicios", "Cobros Ejecutivos", "Derechos Reales", "Sucesiones"],
  "Derecho Laboral": ["Contratos", "Despidos", "Accidentes laborales", "Indemnizaciones y Liquidaciones"],
  "Derecho del Consumidor": ["Derechos y Garantías", "Compra - Venta", "Prestación de Servicios", "Daños"],
  "Procesos Administrativos": ["Reclamos", "Impugnaciones", "Amparos"],
  "Derecho Penal": ["Denuncias", "Querellas", "Juicios", "Audiencias", "Restricciones", "Reparaciones"],
  "Derecho Previsional": ["Jubilaciones", "Pensiones", "Moratorias"],
  "Propiedad Intelectual": ["Creación y Registración", "Denuncias"],
  "Mediaciones y Amparos": ["Mediaciones", "Amparos"]
};

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    area: "",
    especialidad: "",
    consulta: ""
  });

  const [errores, setErrores] = useState({});

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    setErrores({
      ...errores,
      [name]: ""
    });
  };

  const manejarArea = (e) => {
    const value = e.target.value;

    setForm({
      ...form,
      area: value,
      especialidad: ""
    });

    setErrores({
      ...errores,
      area: "",
      especialidad: ""
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    let nuevosErrores = {};

    if (!form.nombre) nuevosErrores.nombre = "El nombre completo es obligatorio";
    if (!form.area) nuevosErrores.area = "Selecciona un área";
    if (!form.especialidad) nuevosErrores.especialidad = "Selecciona una especialidad";
    if (!form.consulta) nuevosErrores.consulta = "La consulta no puede estar vacía";

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      Swal.fire({
        icon: "error",
        title: "Faltan datos",
        text: "Por favor completa todos los campos obligatorios",
        confirmButtonColor: "#dc3545"
      });
      return;
    }

    const mensaje = `📌 *Nueva Consulta Legal*

👤 *Nombre:* ${form.nombre}

⚖️ *Área:* ${form.area}
📂 *Especialidad:* ${form.especialidad}

📝 *Consulta:*
${form.consulta}
`;

    const url = `https://wa.me/5493815303836?text=${encodeURIComponent(mensaje)}`;

    Swal.fire({
      icon: "success",
      title: "¡Listo!",
      text: "Serás redirigido a WhatsApp para enviar tu consulta",
      confirmButtonColor: "#25D366",
      confirmButtonText: "Ir a WhatsApp",
      showCancelButton: true,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, "_blank");

        setForm({
          nombre: "",
          area: "",
          especialidad: "",
          consulta: ""
        });

        setErrores({});
      }
    });
  };

  return (
    <div
      className="form-container"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h3 className="text-center T2">Consulta Legal</h3>

      <p className="text-muted text-center mb-4">
        Completa el formulario y te responderemos a la brevedad
      </p>

      <Form onSubmit={manejarSubmit}>

        <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="0">
          <Form.Label className="form-label-custom">Apellido y Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={manejarCambio}
            placeholder="Ej: Juan Pérez"
            className="input-custom"
            isInvalid={!!errores.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {errores.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="100">
          <Form.Label className="form-label-custom">Área Legal</Form.Label>
          <Form.Select
            name="area"
            value={form.area}
            onChange={manejarArea}
            className="input-custom"
            isInvalid={!!errores.area}
          >
            <option value="">Selecciona el área legal del caso</option>
            {Object.keys(especialidadesPorArea).map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errores.area}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="200">
          <Form.Label className="form-label-custom">Especialidad</Form.Label>
          <Form.Select
            name="especialidad"
            value={form.especialidad}
            onChange={manejarCambio}
            disabled={!form.area}
            className="input-custom"
            isInvalid={!!errores.especialidad}
          >
            <option value="">Selecciona una especialidad</option>
            {form.area &&
              especialidadesPorArea[form.area].map((esp, index) => (
                <option key={index} value={esp}>
                  {esp}
                </option>
              ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errores.especialidad}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="300">
          <Form.Label className="form-label-custom">Consulta</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="consulta"
            value={form.consulta}
            onChange={manejarCambio}
            placeholder="Describe tu problema legal..."
            className="input-custom"
            isInvalid={!!errores.consulta}
          />
          <Form.Control.Feedback type="invalid">
            {errores.consulta}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="btn-submit w-100"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Enviar consulta por WhatsApp
        </Button>

      </Form>
    </div>
  )
}

export default Formulario