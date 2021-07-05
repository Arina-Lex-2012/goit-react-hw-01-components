import { Profile } from "../Profile/Profile";
import user from "../../data/user.json";
import { Statistics } from "../Statistics/Statistics";
import statisticalData from "../../data/statistical-data.json";
import { FriendList } from "../FriendList/FriendList";
import friends from "../../data/friends.json";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import transactions from "../../data/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
