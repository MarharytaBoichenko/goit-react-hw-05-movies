import Header from '../../components/Header/Header';
import List from '../../components/List/List';
export default function HomePage({ children }) {
  return (
    <>
      <Header>{children}</Header>
      <List />
    </>
  );
}
