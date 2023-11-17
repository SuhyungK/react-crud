export function Button({ name, onClick, width }) {
  return (
    <button width={width}
      type="submit" 
      onClick={onClick}
      className="py-2 px-10 m-2 h-11"
      style={{ 
        backgroundColor: "#1c2129",
        color: "#dad1c5",
        // width: "120px",
        width: width
      }}
    >
      {name}
    </button>
  )
}