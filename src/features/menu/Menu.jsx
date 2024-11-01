import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
const loader = async () => {
  const menu = await getMenu();
  return menu;
};
function Menu() {
  const menus = useLoaderData();
  return (
    <ul className="divide-y divide-stone-400">
      {menus.map((menu) => (
        <MenuItem pizza={menu} key={menu.id}></MenuItem>
      ))}
    </ul>
  );
}
export { loader };
export default Menu;
