define([
    'backbone'], function (Backbone) {
    return Backbone.View.extend({
        initialize: function () {
            this.$wrapper = $('#side-panel .content');
        },
        updateData: function (data) {
            this.data = cloneObject(data);
        },
        render: function () {
            // append to wrapper
            if (this.$wrapper.find(`#${this.id}`).length === 0) {
                this.$wrapper.append(`
                    <div id="${this.id}" class="widget">
                        <div class="title">${this.name}</div>
                        <div class="content-widget"></div>
                    </div>
                `)
                this.$content = $(`#${this.id} .content-widget`)
                this.$el = $(`#${this.id}`)
            }

            // if data is null, show loading
            if (this.data == null) {
                this.$content.html(
                    '<div class="loading">' +
                    '   <p class="blink">Loading Data</p>' +
                    '</div>')
            } else if (Object.keys(this.data).length === 0) {
                this.$content.html(
                    '<div class="loading">' +
                    '   <p class="error">No data found</p>' +
                    '</div>')
            } else {
                this.$content.html('');
                this.renderData()
            }
        },
        destroy: function () {
            this.destroyData()
            this.$el.remove()
        },
        /** Abstract function called when data is presented
         */
        renderData: function () {

        },
        /** Abstract function called when widget destroyed
         */
        destroyData: function () {

        },
    });
});