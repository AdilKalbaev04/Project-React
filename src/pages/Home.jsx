import Main from "../containers/Home/Main";

const Home = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:1337/api/flats?populate=image   ")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data.data);
  //       setPosts(data[0].id);
  //     });
  // }, []);

  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;
