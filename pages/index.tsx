export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "https://flipbook.framer.website",
    },
  };
}

export default function Home() {
  return null;
}
