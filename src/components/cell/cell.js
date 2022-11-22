

export const Cell = (props) => {
    return(
    <button id={props.id} data-testid={props.id} style={style} onClick={props.onClick} >
        { props.value }
    </button>
    )   
}

const style = {
    backgroundColor: 'lightblue',
    height: '5rem',
    width: '5rem',
    padding: '0rem',
    border: "2px solid",
    fontSize: '2rem'
  }