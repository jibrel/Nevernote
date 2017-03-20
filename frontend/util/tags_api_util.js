export const createTag = tag => (
  $.ajax({
    method: "POST",
    url: "/api/tags",
    data: tag
  })
);

export const deleteTag = tagId => (
  $.ajax({
    method: "DELETE",
    url: `/api/tags/${tagId}`
  })
);
