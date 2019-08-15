import { useGalleryContext } from "./store/GalleryStore";

function App() {
  const { galleryState, dispatch } = useGalleryContext();

  return (
    <div>
      <Store.Provider>
        <AdminForm />
        <ShoppingCartLink />
        <Welcome />
        <FeaturedArt />
        <Gallery>
          {galleryState.artwork.map(art => (
            <Art key={art.id} name={art.name} description={art.description}>
              <ButtonAddToCart />
            </Art>
          ))}
        </Gallery>
        <ShoppingCart>
          <Checkout />
        </ShoppingCart>
        <Artist />
        <RequestForm />\
      </Store.Provider>
    </div>
  );
}
