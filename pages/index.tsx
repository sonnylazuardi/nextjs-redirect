export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "https://sonnylab.com/flipbook",
    },
  };
}

export default function Home() {
  return null;
}
