import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';



export const GifGrid = ({ category }) => {

	const getImages = async() => {
		const newImages = await getGifs( category );
		setImages(newImages);
	}

  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
				{
					images.map( (image) => (
						<GifItem Key={ image.id } {...image}/>
					))
				}
			</div>
    </>
  );
};
