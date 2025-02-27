//recommended approach 
export const Header = (props)=>{
    //props will take all arguments as an object here
    console.log("props --", props);
    return (
        <div>
            <h3 className="fs-14">Hello {props.name} from Header Component</h3>
        </div>
    )
}

//it doesnt matter how you name the component while importing from other component
// export default Header;
