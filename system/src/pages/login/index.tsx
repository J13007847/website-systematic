import { useDispatch } from "react-redux";
import { updateMenuRoute } from "@/store/reducers/login";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const add = () => {
    dispatch(updateMenuRoute());
  };
  return (
    <div>
      <button onClick={add}>增加</button>
      <p onClick={() => navigator("main/system")}>去新增的页面</p>
    </div>
  );
}
