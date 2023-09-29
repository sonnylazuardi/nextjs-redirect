export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "https://flipbook.sonnylab.com/",
    },
  };
}

export default function Home() {
  return null;
}
