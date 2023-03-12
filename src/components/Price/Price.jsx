import { useGetRestorauntsQuery } from "../../store/reducers/restoraunt.reducer";
import React from "react";

const Price = () => {
  const { data, isLoading } = useGetRestorauntsQuery();
  if (isLoading) return <h1>loading...</h1>;
  const restoraunt = data.data
  console.log(restoraunt);
  return <div>
    {restoraunt && restoraunt.map(item =>{
      return <img src={item.image.url} alt={item.title} />
    })}
  </div>;
};

export default Price;
