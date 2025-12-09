import download from "./download.jpg";
function Image(){
    return (<div>
        <h1>Image loading...</h1>
        <img src={download} alt="image"/>
    </div>
    );
}
export default Image;