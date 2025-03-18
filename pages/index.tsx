export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp",
    },
  };
}
export default function Home() {
  return null;
}
