export default function() {
  return [
    {
      title: "Raport",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
    },

    {
      title: "Mapa",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/maps",
    },
    // {
    //   title: "Add New Post",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    {
      title: "Profil Użytkownika",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
