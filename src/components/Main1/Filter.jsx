import "./Filter.css"
function Filter(props) {
    const selectChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return(
        <div className='filter'>
            <div className='filter__control '>
                <select className="opt" value={props.selected} onChange={selectChangeHandler}> 
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>

    )
}
export default Filter