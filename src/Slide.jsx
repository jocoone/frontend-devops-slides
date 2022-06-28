const Slide = ({ children, notes, background, video }) => {
  return (
    <section
      data-background-image={background}
      data-background-video={video}
      data-background-video-loop
      data-background-video-muted
      data-background-size="cover"
    >
      <div className="children">{children}</div>
      {notes ? <aside className="notes">{notes}</aside> : null}
    </section>
  )
}

export default Slide
