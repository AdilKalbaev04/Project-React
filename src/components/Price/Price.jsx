import { useGetRestorauntsQuery } from "../../store/reducers/restoraunt.reducer";
import React from "react";

const Price = () => {
  const { data, isLoading } = useGetRestorauntsQuery();
  if (isLoading) return <h1>loading...</h1>;
  const restoraunt = data.data
  return <div>
    {restoraunt && restoraunt.map(item =>{
      return <h3 key={item.id}>{item.desc}</h3>
    })}
  </div>;
};

export default Price;
