// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import user from './profile/user.json'
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import data from './statistics/data.json'
import FriendList from './friend-list/FriendList';
import friends from './friend-list/friends.json';
import Transaction from './transaction/Transaction';
import transactions from './transaction/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <Transaction transactions={transactions} />
    </div>
  );
};