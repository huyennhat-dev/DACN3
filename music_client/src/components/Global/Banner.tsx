import { banners } from "../../api/_mock";

const Banner = () => {
  return (
    <div className="mt-2">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 image-slider">
        {banners.map((item, index) => (
          <img
            key={index}
            src={item.photo}
            alt={`Image ${index + 1}`}
            className="rounded"
          />
        ))}
      </div>
      <div className=" md:hidden mb-5 image-slider">
        <img src={banners[0].photo} alt={`Image 1`} className="rounded" />
      </div>
    </div>
  );
};

export default Banner;
