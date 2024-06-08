import useFetch from "./customhook";

const Fetch = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
    
          return <p key={item.id}>{item.id} {item.userId} {item.title} </p>;
        })}
    </>
  );
};
export default Fetch;