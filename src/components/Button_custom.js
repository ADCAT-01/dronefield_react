
// 나중에 버튼을 App.css로 옮기기 - 이름도 그냥버튼, 아웃라인드버튼으로 바꾸기
// simple button
export const ButtonCustom = (props) => {
  return (<button style={{
    border: "none",
    outline: "none",
    // background: "#5E8234",
    background: "rgb(150, 180, 62)",
    width: "100px",
    height: "40px",
    color: "#FFFFFF",
    // color: "black",
    margin: "10px",
    borderRadius: "10px",
    fontSize: "16px",
    lineHeight: "18px",
  }}
    onClick={props.onFuncClicked}
  >{props.btn_name}</button >)
}

// out-lined button
export const ButtonCustom2 = (props) => {
  return (<button style={{
    // border: "none",
    // outline: "none",
    // background: "rgb(150, 180, 62)",
    // width: "100px",
    // height: "40px",
    // color: "#FFFFFF",
    // // color: "black",
    // margin: "10px",
    // borderRadius: "10px",
    // fontSize: "16px",
    // lineHeight: "18px",

    border: "2px solid rgb(150, 180, 62)",
    borderRadius: "10px",
    backgroundColor: "white",
    color: "rgb(150, 180, 62)",
    width: "100px",
    height: "40px",
    fontSize: "16px",
    margin: "10px",
    lineHeight: "18px",
    // cursor: pointer;
  }}
    onClick={props.onFuncClicked}
  > {props.btn_name}</button >)
}
