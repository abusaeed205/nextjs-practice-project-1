
const TutorialPage =async ({ params }) => {
  const { slug } =await params;
  console.log(slug)
  return (<div>
    <p>This is the tutorial page for the topic</p>
  </div>);
}      

export default TutorialPage;