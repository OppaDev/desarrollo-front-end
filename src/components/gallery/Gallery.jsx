import { Card } from "../elements/Card.jsx";

export const Gallery = () => {
  return (
   <section className="p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Galería de Productos</h2>
        <p className="text-lg text-gray-600">
          Explora nuestra exclusiva colección de productos de The Body Shop. Encuentra lo mejor en cuidado personal y belleza.
        </p>
        <p className="text-lg text-red-500 font-semibold mt-4">
          ¡Aprovecha nuestras promociones especiales por tiempo limitado!
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
        <Card
          srcImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          productName="Tree"
          price={100}
        />
      </div>
    </section>
  );
};

export default Gallery;
