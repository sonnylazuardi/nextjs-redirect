export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "https://github.com/sonnylazuardi/chat-ai-desktop",
    },
  };
}

export default function Home() {
  return null;
}
