

export const Contacto = () => {
    return (
        <section>
            <h2>Contacto</h2>
            <form action="">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Mensaje:</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contacto;