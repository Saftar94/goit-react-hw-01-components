import Profile from './components/Profile/Profile';
import Statisticks from './components/Statisticks/Statisticks.js';
import FriendList from './components/friendlist/Friendlist';
import TransactionHistory from './components/transactions/Transactions';

import user from './data/user.json';
import data from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Section from 'components/Section/Section';
// import { Profiler } from 'react'

function App() {
  return (
    <>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statisticks title="Upload stats" stats={data} />;
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />{' '}
      </Section>
    </>
  );
}

export default App;
