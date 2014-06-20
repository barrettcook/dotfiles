" display syntax errors inline
call pathogen#infect()

" Whitespace
set tabstop=2
set softtabstop=2
set shiftwidth=2
set autoindent
filetype plugin indent on
set expandtab                   " use spaces, not tabs (optional)
set nowrap                      " don't wrap lines
set backspace=indent,eol,start  " backspace through everything in insert mode
set smarttab
set lbr
set tw=500
set si "Smart indet

set ruler "Always show current position

set showmatch "Show matching bracets when text indicator is over them

" keep context while scrolling. Keep 5 lines above or below
set scrolloff=5

" Font Styles
" set guifont=Menlo\ Regular:h16
" colorscheme torte
" set number                    " show line numbers
color codeschool
set guifont=Monaco:h12

" Copy to clipboard
set clipboard+=unnamed
 
" Map the key for toggling comments with vim-commentary
nmap <D-/> gcc

" set leader to ,
let mapleader = ","

" Quickly edit/reload the vimrc file
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>

" Smart way to move btw. windows
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

" From here: http://amix.dk/vim/vimrc.htmlA
" GENERAL

" Set to auto read when a file is changed from the outside
set autoread

" When vimrc is edited, reload it
" autocmd! bufwritepost vimrc source ~/.vim_runtime/vimrc

" No sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500
set visualbell t_vb=
set vb


"" Searching
set hlsearch                    " highlight matches
set incsearch                   " incremental searching
set ignorecase                  " searches are case insensitive...
set smartcase                   " ... unless they contain at least one capital letter

" " The Silver Searcher
" if executable('ag')
"     " Use ag over grep
"     set grepprg=ag\ --nogroup\ --nocolor
" 
"     " Use ag in CtrlP for listing files. Lightning fast and respects .gitignore
"     let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
" 
"     " ag is fast enough that CtrlP doesn't need to cache
"     let g:ctrlp_use_caching = 0
" endif

" CtrlP
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*/target/*    " MacOSX/Linux
let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
  
" " bind K to grep word under cursor
" nnoremap K :grep! "\b<C-R><C-W>\b"<CR>:cw<CR>
" 
" set nocompatible                " choose no compatibility with legacy vi
" syntax enable
" set encoding=utf-8
" set showcmd                     " display incomplete commands
" filetype plugin indent on       " load file type plugins + indentation
" 
" let g:syntastic_auto_loc_list = 2
" let g:syntastic_check_on_open = 1
" 
 
 
 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Files, backups and undo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Turn backup off, since most stuff is in SVN, git anyway...
" set nobackup
" set nowb
" set noswapfile

" "Persistent undo
" try
"     if MySys() == "windows"
"       set undodir=C:\Windows\Temp
"     else
"       set undodir=~/.vim_runtime/undodir
"     endif
" 
"     set undofile
" catch
" endtry

" """"""""""""""""""""""""""""""
" " => Visual mode related
" """"""""""""""""""""""""""""""
" " Really useful!
" "  In visual mode when you press * or # to search for the current selection
" vnoremap <silent> * :call VisualSearch('f')<CR>
" vnoremap <silent> # :call VisualSearch('b')<CR>
" 
" 
" Bash like keys for the command line
cnoremap <C-A>      <Home>
cnoremap <C-E>      <End>
cnoremap <C-K>      <C-U>


" """"""""""""""""""""""""""""""
" " => Command-T
" """"""""""""""""""""""""""""""
" let g:CommandTMaxHeight = 15
" " set wildignore+=*.o,*.obj,.git,*.pyc
" noremap <leader>f :CommandT<cr>
" noremap <leader>F :CommandTFlush<cr>
" 
" nnoremap <leader><leader> <c-^> " switch between the currently open buffer and the previous one

" nmap W <C-w>_
" 
" 
" set undodir=~/.vim/undodir
" set undofile
" set undolevels=1000 "maximum number of changes that can be undone
" set undoreload=10000 "maximum number lines to save for undo on a buffer reload
" 
let g:vim_markdown_folding_disabled=1
" 
" set tags=~/src/tags
" 
set runtimepath^=~/.vim/bundle/ctrlp.vim
let g:SuperTabDefaultCompletionType = "context"
" 
" set complete-=i


" Syntax highlighters
au BufRead,BufNewFile *.handlebars,*.hbs,*.hjs set ft=handlebars
autocmd! BufRead,BufNewFile *.less set filetype=less 

" Remap .html files as .php
augroup filetype
    autocmd BufNewFile,BufRead ~/src/web/*.html set filetype=php
augroup END

" Hide the toolbar in MacVim
if has("gui_running")
    set guioptions=egmrt
endif


