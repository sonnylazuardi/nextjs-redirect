export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "https://sonnylab.framer.website",
    },
  };
}
export default function Home() {
  return null;
}
