import Products from './Products';

export const Home = (props) => {
    return (
        <div className='container my-4'>
            <Products showAlert={props.showAlert} />
        </div>
    )
}
