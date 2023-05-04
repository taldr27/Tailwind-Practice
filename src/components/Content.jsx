import imageOne from '../images/egg.jpg';
import imageTwo from '../images/egg-2.jpg';

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={imageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, delicious and nutricious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={imageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Crispy, delicious and nutricious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  )
}

export default Content
