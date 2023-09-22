import cn from "classnames";
import styles from "./HomePage.module.scss";
import { withMainLayout } from "app/layouts/main";
import { Counter } from "entities/Counter";

const HomePage = () => {
  return (
    <div className={cn(styles.Home)}>
      <Counter />
    </div>
  );
};

export default withMainLayout(HomePage);
