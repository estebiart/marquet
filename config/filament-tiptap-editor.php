<?php

return [
    'direction' => 'ltr',
    'max_content_width' => '5xl',
    'disable_stylesheet' => false,
    'disable_link_as_button' => false,

    /*
    |--------------------------------------------------------------------------
    | Profiles
    |--------------------------------------------------------------------------
    |
    | Profiles determine which tools are available for the toolbar.
    | 'default' is all available tools, but you can create your own subsets.
    | The order of the tools doesn't matter.
    |
    */
    'profiles' => [
        'default' => [
            'heading', 'bullet-list', 'ordered-list', 'checked-list', 'blockquote', 'hr', '|',
            'bold', 'italic','custom', 'strike', 'underline', 'superscript', 'subscript', 'lead', 'small', 'color', 'highlight', 'align-left', 'align-center', 'align-right', '|',
            'link', 'media', 'oembed', 'table',  'details', '|', 'code', 'code-block', 'source', 'blocks','customembebido','custommedia', 'customrelacionada' , 'custominstagram','custompdf','customaudio'
        ],
        'simple' => ['heading', 'hr', 'bullet-list', 'ordered-list', 'checked-list', '|', 'bold', 'italic', 'custom','lead', 'small', '|', 'link','customembebido','custommedia', 'customrelacionada','customaudio'],
        'minimal' => ['bold', 'italic', 'custom','link', 'bullet-list', 'ordered-list','customembebido','custommedia', 'customrelacionada'],
        'none' => [],
    ],

    /*
    |--------------------------------------------------------------------------
    | Actions
    |--------------------------------------------------------------------------
    |
    */
    'media_action' => App\Filament\Actions\CustomMediaAction::class,
    // 'media_action' => FilamentTiptapEditor\Actions\MediaAction::class,
    //  'media_action' => Awcodes\Curator\Actions\MediaAction::class,
    // 'edit_media_action' => FilamentTiptapEditor\Actions\EditMediaAction::class,
    'edit_media_action' => App\Filament\Actions\CustomMediaAction::class,
    'link_action' => FilamentTiptapEditor\Actions\LinkAction::class,
    'grid_builder_action' => FilamentTiptapEditor\Actions\GridBuilderAction::class,
    'oembed_action' => FilamentTiptapEditor\Actions\OEmbedAction::class,

    /*
    |--------------------------------------------------------------------------
    | Output format
    |--------------------------------------------------------------------------
    |
    | Which output format should be stored in the Database.
    |
    | See: https://tiptap.dev/guide/output
    */
    'output' => FilamentTiptapEditor\Enums\TiptapOutput::Html,

    /*
    |--------------------------------------------------------------------------
    | Media Uploader
    |--------------------------------------------------------------------------
    |
    | These options will be passed to the native file uploader modal when
    | inserting media. They follow the same conventions as the
    | Filament Forms FileUpload field.
    |
    | See https://filamentphp.com/docs/3.x/panels/installation#file-upload
    |
    */
    'accepted_file_types' => ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'application/pdf'],
    'disk' => 's3',
    'directory' => 'media',
    'visibility' => 'public',
    'preserve_file_names' => false,
   'max_file_size' => 10240, // 10MB
    'min_file_size' => 0,
    'image_resize_mode' => null,
    'image_crop_aspect_ratio' => null,
    'image_resize_target_width' => null,
    'image_resize_target_height' => null,
    'use_relative_paths' => false,

    /*
    |--------------------------------------------------------------------------
    | Menus
    |--------------------------------------------------------------------------
    |
    */
    'disable_floating_menus' => false,
    'disable_bubble_menus' => false,
    'disable_toolbar_menus' => false,
    //constructo de cuadricula  = grid builder

    'bubble_menu_tools' => ['heading','bold', 'italic', 'strike', 'underline', 'superscript', 'subscript', 'lead', 'small', 'link'],
    'floating_menu_tools' => [ 'heading','custom', 'details', 'table', 'oembed', 'code-block', 'blocks','customrelacionada','customembebido','custommedia', 'customrelacionada'],

    /*
    |--------------------------------------------------------------------------
    | Extensions
    |--------------------------------------------------------------------------
    |
    */
    'extensions_script' => null,
    'extensions_styles' => null,
    'extensions' => [],

    /*
    |--------------------------------------------------------------------------
    | PresetColors
    |--------------------------------------------------------------------------
    |
    | Possibility to define presets colors in ColorPicker.
    | Only hexadecimal value
    'preset_colors' => [
        'primary' => '#f59e0b',
        //..
    ]
    |
    */
    'preset_colors' => [],
];
