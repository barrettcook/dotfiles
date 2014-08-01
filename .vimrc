" display syntax errors inline
call pathogen#infect()

" " 4 spaces for tab
set tabstop=4
set softtabstop=4
set shiftwidth=4
set autoindent
filetype plugin indent on

" set number
set guifont=DejaVu\ Sans\ Mono\ for\ Powerline:h14

" keep context while scrolling. Keep 5 lines above or below
set scrolloff=5

let g:netrw_liststyle=3 "Toggle list style of Explore mode
map <leader>t :Explore<cr> 

" colorscheme torte
syntax on
syntax enable
colorscheme solarized
set background=dark
let g:solarized_termtrans = 1
set encoding=utf-8
set showcmd                     " display incomplete commands
filetype plugin indent on       " load file type plugins + indentation
set nocompatible                " choose no compatibility with legacy vi

" set leader to ,
let mapleader = ","
" Quickly edit/reload the vimrc file
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>
"
" quick mappings to common dirs
" let $t = "~/src/web"
" let $d = "~/src"

" Use the below highlight group when displaying bad whitespace is desired.
highlight BadWhitespace ctermbg=red guibg=red

" Syntax highlighters
au BufRead,BufNewFile *.handlebars,*.hbs,*.hjs set ft=handlebars
autocmd! BufRead,BufNewFile *.less set filetype=less 
au BufRead,BufNewFile *.html set filetype=mako

" Display tabs at the beginning of a line in Python mode as bad.
au BufRead,BufNewFile *.py,*.pyw match BadWhitespace /^\t\+/
" Make trailing whitespace be flagged as bad.
au BufRead,BufNewFile *.py,*.pyw,*.c,*.h,*.sh match BadWhitespace /\s\+$/

" Turn off settings in 'formatoptions' relating to comment formatting.
" - c : do not automatically insert the comment leader when wrapping based on
"    'textwidth'
" - o : do not insert the comment leader when using 'o' or 'O' from command mode
" - r : do not insert the comment leader when hitting <Enter> in insert mode
" Python: not needed
" C: prevents insertion of '*' at the beginning of every line in a comment
au BufRead,BufNewFile *.c,*.h set formatoptions-=c formatoptions-=o formatoptions-=r

" Use UNIX (\n) line endings.
" Only used for new files so as to not force existing files to change their
" line endings.
" Python: yes
" C: yes
au BufNewFile *.py,*.pyw,*.c,*.h set fileformat=unix


" rst docs
" Make trailing whitespace be flagged as bad.
au BufRead,BufNewFile *.rst match BadWhitespace /\s\+$/
" Strip trailing whitespace on save
au BufWritePre *.rst :%s/\s\+$//e

" Bad whitespace for html, js, css and yaml
au BufRead,BufNewFile *.html,*.css,*.js,*.less,*.yml match BadWhitespace /^\t\+/
au BufRead,BufNewFile *.html,*.css,*.js,*.less,*.yml match BadWhitespace /\s\+$/
au BufWritePre *.html,*.css,*.js,*.less,*.yml :%s/\s\+$//e
"
" Remap .html files as .php
augroup filetype
    autocmd BufNewFile,BufRead ~/src/eventbritecore/*.html set filetype=python
augroup END

" Hide the toolbar in MacVim
if has("gui_running")
    set guioptions=egmrt
endif

set clipboard+=unnamed

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
autocmd! bufwritepost vimrc source ~/.vim_runtime/vimrc

set ruler "Always show current position

set cc=80 "Column at 80 chars

set showmatch "Show matching bracets when text indicator is over them

match Error /\s\+$/

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

" The Silver Searcher
if executable('ag')
    " Use ag over grep
    set grepprg=ag\ --nogroup\ --nocolor

    " Use ag in CtrlP for listing files. Lightning fast and respects .gitignore
    let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'

    " ag is fast enough that CtrlP doesn't need to cache
    let g:ctrlp_use_caching = 0
endif

" CtrlP
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*/target/*    " MacOSX/Linux
let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
set runtimepath^=~/.vim/bundle/ctrlp.vim
  
" bind K to grep word under cursor
nnoremap K :grep! "\b<C-R><C-W>\b"<CR>:cw<CR>

"" Whitespace
set nowrap                      " don't wrap lines
set tabstop=4 shiftwidth=4      " a tab is 4 spaces
set expandtab                   " use spaces, not tabs (optional)
set backspace=indent,eol,start  " backspace through everything in insert mode

let g:syntastic_auto_loc_list = 2
let g:syntastic_check_on_open = 1

" vim-airline
" Note: Download the powerline-fonts, install them and set it as the default in terminal
let g:airline_powerline_fonts = 1
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif
let g:airline_symbols.space = "\ua0"
let g:airline#extensions#tabline#enabled = 1
set laststatus=2

" Preserve indentation while pasting text from the OS X clipboard
noremap <leader>p :set paste<CR>:put  *<CR>:set nopaste<CR>




" " Set font according to system
" set gfn=Menlo:h14
" set shell=/bin/bash
" 
" if has("gui_running")
"   set guioptions-=T
"   set t_Co=256
"   set background=dark
"   colorscheme peaksea
"   set nonu
" else
"   colorscheme zellner
"   set background=dark
" 
"   set nonu
" endif
" 
" set encoding=utf8
" try
"     lang en_US
" catch
" endtry
" 
" set ffs=unix,dos,mac "Default file types




"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Files, backups and undo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Turn backup off, since most stuff is in SVN, git anyway...
set nobackup
set nowb
set noswapfile

"Persistent undo
try
    if MySys() == "windows"
      set undodir=C:\Windows\Temp
    else
      set undodir=~/.vim_runtime/undodir
    endif

    set undofile
catch
endtry



" """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" " => Text, tab and indent related
" """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set expandtab
set shiftwidth=4
set tabstop=4
set smarttab

set lbr
set tw=500

set ai "Auto indent
set si "Smart indet
set wrap "Wrap lines


""""""""""""""""""""""""""""""
" => Visual mode related
""""""""""""""""""""""""""""""
" Really useful!
"  In visual mode when you press * or # to search for the current selection
vnoremap <silent> * :call VisualSearch('f')<CR>
vnoremap <silent> # :call VisualSearch('b')<CR>


" Bash like keys for the command line
cnoremap <C-A>      <Home>
cnoremap <C-E>      <End>
cnoremap <C-K>      <C-U>


""""""""""""""""""""""""""""""
" => Command-T
""""""""""""""""""""""""""""""
let g:CommandTMaxHeight = 15
" set wildignore+=*.o,*.obj,.git,*.pyc
noremap <leader>f :CommandT<cr>
noremap <leader>F :CommandTFlush<cr>

nnoremap <leader><leader> <c-^> " switch between the currently open buffer and the previous one

nmap W <C-w>_


set undodir=~/.vim/undodir
set undofile
set undolevels=1000 "maximum number of changes that can be undone
set undoreload=10000 "maximum number lines to save for undo on a buffer reload

let g:vim_markdown_folding_disabled=1

set tags=/Volumes/eb_home/work/tags
